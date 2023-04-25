package com.example.demo.service;


import com.example.demo.dao.BasicDao;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    //@Autowired
    //TodoDao todoDao; // 取得Dao物件
    public BasicDao printO(BasicDao request){
        System.out.println(request.getStudentID()+" "+request.getPassword());
        return request;
    }
}
