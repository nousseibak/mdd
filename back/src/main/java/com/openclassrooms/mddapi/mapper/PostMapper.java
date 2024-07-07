package com.openclassrooms.mddapi.mapper;

import com.openclassrooms.mddapi.dto.PostDTO;
import com.openclassrooms.mddapi.model.Comment;
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
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Component
@Mapper(componentModel = "spring", uses = {UserMapper.class, TopicMapper.class, CommentMapper.class})
public interface PostMapper {

    @Mappings({
            @Mapping(source = "author", target = "author"),
            @Mapping(source = "topic", target = "topic"),
            @Mapping(source = "comments", target = "comments")
    })
    PostDTO toDto(Post post);

    List<PostDTO> toDto(List<Post> posts);

    @Mappings({
            @Mapping(source = "author", target = "author"),
            @Mapping(source = "topic", target = "topic"),
            @Mapping(source = "comments", target = "comments")
    })
    Post toEntity(PostDTO postDTO);

    List<Post> toEntity(List<PostDTO> postDTOs);
}
