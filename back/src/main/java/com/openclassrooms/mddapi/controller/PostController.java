package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.PostDTO;
import com.openclassrooms.mddapi.mapper.PostMapper;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.service.PostService;
import com.openclassrooms.mddapi.service.TopicService;
import com.openclassrooms.mddapi.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/posts")
public class PostController {

    @Autowired
    private PostService postService;
    @Autowired
    private TopicService topicService;
    @Autowired
    private PostMapper postMapper;

    @GetMapping("/{postId}")
    public ResponseEntity<PostDTO> getPostById(@PathVariable Long postId) {
        Optional<Post> post = postService.getPostById(postId);
        if (post.isPresent()) {
            return ResponseEntity.ok(postMapper.toDto(post.get()));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<PostDTO>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return ResponseEntity.ok(postMapper.toDto(posts));
    }

    @PostMapping("/create")
    public ResponseEntity<PostDTO> createPost(@Valid @RequestBody PostDTO postDTO) {
        Post post = postService.savePost(postMapper.toEntity(postDTO));
        return ResponseEntity.status(HttpStatus.CREATED).body(postMapper.toDto(post));
    }

    @GetMapping("/byTopic/{topicId}")
    public ResponseEntity<List<PostDTO>> getPostsByTopic(@PathVariable Long topicId) {
        Topic topic = topicService.getTopicById(topicId);
        if (topic != null) {
            List<Post> posts = postService.getPostsByTopic(topic);
            return ResponseEntity.ok(postMapper.toDto(posts));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/byUserSubscriptions/{userId}")
    public ResponseEntity<List<PostDTO>> getPostsByUserSubscriptions(@PathVariable Long userId) {
        List<Post> posts = postService.getPostsByUserSubscriptions(userId);
        if (posts != null) {
            return ResponseEntity.ok(postMapper.toDto(posts));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
