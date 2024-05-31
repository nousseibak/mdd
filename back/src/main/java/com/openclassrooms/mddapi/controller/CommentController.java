package com.openclassrooms.mddapi.controller;

import com.openclassrooms.mddapi.dto.CommentDTO;
import com.openclassrooms.mddapi.mapper.CommentMapper;
import com.openclassrooms.mddapi.model.Comment;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.service.CommentService;
import com.openclassrooms.mddapi.service.PostService;
import com.openclassrooms.mddapi.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private UserService userService;
    @Autowired
    private PostService postService;
    @Autowired
    private CommentMapper commentMapper;


    @GetMapping("/all")
    public ResponseEntity<List<CommentDTO>> getAllComments() {
        List<Comment> comments = commentService.getAllComments();
        return ResponseEntity.ok(commentMapper.toDto(comments));
    }

    @GetMapping("/allByAuthor/{id}")
    public ResponseEntity<?> getAllCommentsByAuthor(@PathVariable Long id) {
        User user= userService.getUserById(id);
        if(user!=null) {
            List<Comment> comments = commentService.findAllByAuthor(user);
            return ResponseEntity.ok(commentMapper.toDto(comments));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/allByPost/{postId}")
    public ResponseEntity<List<CommentDTO>> getAllCommentsByPost(@PathVariable Long postId) {
        Optional<Post> optionalPost = postService.getPostById(postId);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            List<Comment> comments = commentService.findAllByPost(post);
            return ResponseEntity.ok(commentMapper.toDto(comments));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add/{postId}")
    public ResponseEntity<CommentDTO> addCommentToPost(@PathVariable Long postId, @Valid @RequestBody CommentDTO commentDTO) {
        Optional<Post> optionalPost = postService.getPostById(postId);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            Comment comment = commentMapper.toEntity(commentDTO);
            comment.setPost(post);
            Comment savedComment = commentService.saveComment(comment);
            return ResponseEntity.status(HttpStatus.CREATED).body(commentMapper.toDto(savedComment));
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
