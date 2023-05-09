package com.example.demo;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BasicRepository extends MongoRepository<BasicEntity, String> {
    public BasicEntity findByStudentID(String studentID);
}
