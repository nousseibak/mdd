package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long postId) {
        return postRepository.findById(postId);
    }

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }

    public List<Post> getPostsByTopic(Topic topic) {
        return postRepository.findByTopic(topic);
    }

    public List<Post> getPostsByUserSubscriptions(Long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user != null) {
            List<Topic> subscriptions = user.getSubscriptions();
            List<Post> posts = new ArrayList<>();
            for (Topic topic : subscriptions) {
                posts.addAll(postRepository.findByTopic(topic));
            }
            return posts;
        } else {
            return null;
        }
    }
}
