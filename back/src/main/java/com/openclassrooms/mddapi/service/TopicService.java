package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.TopicRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public Topic getTopicById(Long topicId) {
        return topicRepository.findById(topicId).orElse(null);
    }

    public Topic saveTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    public void deleteTopic(Long topicId) {
        topicRepository.deleteById(topicId);
    }

    public void subscribeUserToTopic(Long topicId, Long userId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new EntityNotFoundException("Topic not found with id: " + topicId));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));

        topic.getSubscribers().add(user);
        user.getSubscriptions().add(topic);
        topicRepository.save(topic);
        userRepository.save(user);
    }

    public void unsubscribeUserFromTopic(Long topicId, Long userId) {
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new EntityNotFoundException("Topic not found with id: " + topicId));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));

        topic.getSubscribers().remove(user);
        user.getSubscriptions().remove(topic);
        topicRepository.save(topic);
        userRepository.save(user);

    }

    public List<Topic> getUserSubscriptions(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            return user.getSubscriptions();
        }
        return null;
    }
}
