package com.example.demo.controller;

import com.example.demo.Crawler;
import com.example.demo.dao.BasicDao;
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

    @PostMapping("/login")
    public void getTodoList (@RequestBody BasicDao basic)throws TesseractException, IOException, InterruptedException  {
        System.out.println(basic.getStudentID());
        String account = basic.getStudentID();
        String password = basic.getPassword();
        Crawler.CrawlerHandle(account,password);

    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello, the time at the server is now " + new Date() + "\n";
    }
}

