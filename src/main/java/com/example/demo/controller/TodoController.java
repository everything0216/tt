package com.example.demo.controller;

import com.example.demo.BasicRepository;
import com.example.demo.Crawler;
import com.example.demo.BasicEntity;
import com.example.demo.service.TodoService;
import net.sourceforge.tess4j.TesseractException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Date;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class TodoController {
    @Autowired
    TodoService todoService;//取得Service物件
    @Autowired
    BasicRepository BRepository;

    @PostMapping("/login")
    public void getTodoList (@RequestBody BasicEntity basic)throws TesseractException, IOException, InterruptedException  {
        System.out.println(basic.getStudentID());
        String account = basic.getStudentID();
        String password = basic.getPassword();
        BRepository.save(basic);
        Crawler.CrawlerHandle(account,password);

    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }

    @PostMapping("/nickname")
    public void postnickname (@RequestBody BasicEntity basic)throws TesseractException, IOException, InterruptedException  {
        //Query query = new Query().addCriteria(Criteria.where("").is(""));
        //FindAndReplaceOptions options=new FindAndReplaceOptions().upsert().returnNew();
        System.out.println(basic.getStudentID());
        BasicEntity oldProduct = BRepository.findByStudentID(basic.getStudentID());

        BasicEntity b = new BasicEntity();
        b.setStudentID(oldProduct.getStudentID());
        b.setPassword(oldProduct.getPassword());
        b.setId(oldProduct.getId());
        b.setNickname(basic.getNickname());

        BRepository.save(b);
    }

}

