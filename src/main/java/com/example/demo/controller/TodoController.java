package com.example.demo.controller;

import com.example.demo.AESEncryptionDecryption;
import com.example.demo.BasicRepository;
import com.example.demo.FinishedRepository;
import com.example.demo.Crawler;

import com.example.demo.FinishedCourse;
import com.example.demo.HouseRepository;
import com.example.demo.dao.BasicEntity;
import com.example.demo.dao.HouseEntity;

import com.example.demo.service.TodoService;
import net.sourceforge.tess4j.TesseractException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class TodoController {
    private String sID;

    @Autowired
    TodoService todoService;//取得Service物件
    @Autowired
    FinishedRepository fRepository;
    BasicRepository basicRepository;
    HouseRepository houseRepository;
    String secretKey = "au4a83";


    @PostMapping("/login")
    public void getTodoList (@RequestBody BasicEntity basic)throws TesseractException, IOException, InterruptedException  {

        AESEncryptionDecryption aesEncryptionDecryption = new AESEncryptionDecryption();
        String studentID = basic.getStudentID();
        String password = basic.getPassword();
        System.out.println(studentID);
        String encryptedpwd = aesEncryptionDecryption.encrypt(password, secretKey);
        String decryptedpwd = aesEncryptionDecryption.decrypt(encryptedpwd, secretKey);
        if(basicRepository.findByStudentID(studentID)==null){
            Crawler crawler = new Crawler();
            crawler.CrawlerHandle(studentID,password);
            basic = crawler.getBasicData(studentID,password);
            basic.setPassword(encryptedpwd);
            basicRepository.save(basic);
        }
        else System.out.println("This account has login before!");
        System.out.println("加密:"+encryptedpwd);
        System.out.println("original:"+decryptedpwd);

        sID = account;
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @PostMapping("/nickname")
    public void postnickname (@RequestBody BasicEntity basic)throws TesseractException, IOException, InterruptedException  {
        System.out.println(basic.getStudentID());
        BasicEntity oldProduct = basicRepository.findByStudentID(basic.getStudentID());
        oldProduct.setNickname(basic.getNickname());
        basicRepository.save(oldProduct);
    }
    @PostMapping("/rent_post")
    public HouseEntity rentPost(@RequestBody HouseEntity house){
        String dateTime = DateTimeFormatter.ofPattern("yyyy MM dd")
                .format(LocalDateTime.now());
        HouseEntity h = new HouseEntity();
        //h.setPost_id();
        h.setStudentID(house.getStudentID());
        h.setName(basicRepository.findByStudentID(house.getStudentID()).getName());//real name
        h.setTitle(house.getTitle());
        h.setMoney(house.getMoney());
        h.setPeople(house.getPeople());
        h.setAddress(house.getAddress());
        h.setArea(house.getArea());
        h.setGender(house.getGender());
        h.setStyle(house.getStyle());
        h.setWater(house.getWater());
        h.setPower(house.getPower());
        h.setCar(house.getCar());
        h.setFloor(house.getFloor());
        h.setRent_date(house.getRent_date());
        h.setNote(house.getNote());
        h.setPost_time(dateTime);
        houseRepository.save(h);
        return h;
    }


    @PostMapping("/remained_credits")
    public void postRemainCredits (@RequestBody FinishedCourse finished)throws TesseractException, IOException, InterruptedException{
        FinishedCourse finishedCourse = new FinishedCourse(sID);
    }
}

