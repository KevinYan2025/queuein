package com.queuein.queueinbackend.controller;

import ch.qos.logback.classic.spi.IThrowableProxy;
import com.queuein.queueinbackend.model.Queue;
import com.queuein.queueinbackend.model.QueueRepository;
import com.queuein.queueinbackend.model.User;
import com.queuein.queueinbackend.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiController {

    private final QueueRepository queueRepository;
    private final UserRepository userRepository;

    public ApiController(QueueRepository queueRepository, UserRepository userRepository) {
        this.queueRepository = queueRepository;
        this.userRepository = userRepository;
    }

    @PostMapping(path ="/createQueue")
    public Queue createQueue(@RequestParam String username, @RequestParam String queueName) {
        Queue queue = new Queue(queueName);
        User queueOwner = new User(true,username,queue);
        queue.getQueueOwners().add(queueOwner);
        queueRepository.save(queue);
        userRepository.save(queueOwner);
        return queue;
    }
    @PostMapping(path ="createAndAddUserToQueue")
    public Queue addUserToQueue(@RequestParam Integer queueID,@RequestParam String name){
            Queue queue = queueRepository.findById(queueID).orElseThrow();
            User user = new User(false, name, queue);
            queue.getUsers().addFirst(user);
            return queueRepository.save(queue);
    }
    @GetMapping(path = "/getUsers")
    public List<User> getUsers(@RequestParam Integer queueID) {
        return queueRepository.findById(queueID).orElseThrow().getUsers();
    }


}
