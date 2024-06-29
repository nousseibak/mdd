package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.TopicDTO;
import com.openclassrooms.mddapi.mapper.TopicMapper;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.service.TopicService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/topics")
public class TopicController {

    private static final Logger logger = Logger.getLogger(TopicController.class.getName());

    @Autowired
    private TopicService topicService;
    @Autowired
    private TopicMapper topicMapper;


    @GetMapping("/all")
    public ResponseEntity<List<TopicDTO>> getAllTopics() {
        List<Topic> topics = topicService.getAllTopics();
        logger.info("Topics from service: " + topics);
        List<TopicDTO> topicDTOS = topicMapper.toDto(topics);
        logger.info("Topics DTO: " + topicDTOS);

        return ResponseEntity.ok(topicDTOS);
    }

    @PostMapping("/create")
    public ResponseEntity<TopicDTO> createTopic(@Valid @RequestBody TopicDTO topicDTO) {
        Topic topic = topicService.saveTopic(topicMapper.toEntity(topicDTO));
        return ResponseEntity.status(HttpStatus.CREATED).body(topicMapper.toDto(topic));
    }

    @PostMapping("/{topicId}/subscribe/{userId}")
    public ResponseEntity<Void> subscribeToTopic(@PathVariable Long topicId, @PathVariable Long userId) {
        topicService.subscribeUserToTopic(topicId, userId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{topicId}/unsubscribe/{userId}")
    public ResponseEntity<Void> unsubscribeFromTopic(@PathVariable Long topicId, @PathVariable Long userId) {
        topicService.unsubscribeUserFromTopic(topicId, userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{userId}/subscriptions")
    public ResponseEntity<List<TopicDTO>> getUserSubscriptions(@PathVariable Long userId) {
        List<Topic> subscriptions = topicService.getUserSubscriptions(userId);
        if(subscriptions!=null) {
            return ResponseEntity.ok(topicMapper.toDto(subscriptions));
        }else{
            return ResponseEntity.notFound().build();
        }
    }
}
