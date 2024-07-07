package com.openclassrooms.mddapi.mapper;

import com.openclassrooms.mddapi.dto.PostDTO;
import com.openclassrooms.mddapi.model.Post;
import com.openclassrooms.mddapi.model.Topic;
import com.openclassrooms.mddapi.model.User;
import com.openclassrooms.mddapi.service.TopicService;
import com.openclassrooms.mddapi.service.UserService;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@Mapper(componentModel = "spring", uses = {UserService.class, TopicService.class}, imports = {Optional.class, Collectors.class, Collections.class, Post.class, User.class, Topic.class})
public abstract class PostMapper implements EntityMapper<PostDTO, Post> {
/**
    @Autowired
    UserService userService;

    @Autowired
    TopicService topicService;

    @Mappings({
            @Mapping(source = "title", target = "title"),
            @Mapping(source = "content", target = "content"),
            @Mapping(target = "author", expression = "java(postDTO.getAuthor() != null ? this.userService.getUserById(postDTO.getAuthor()) : null)"),
            @Mapping(target = "topic", expression = "java(postDTO.getTopicId() != null ? this.topicService.getTopicById(postDTO.getTopicId()) : null)")
    })
    public abstract Post toEntity(PostDTO postDTO);

    @Mappings({
            @Mapping(source = "title", target = "title"),
            @Mapping(source = "content", target = "content"),
            @Mapping(source = "post.author.id", target = "author"),
            @Mapping(source = "post.topic.id", target = "topicId")
    })
    public abstract PostDTO toDto(Post post);

            */
}
