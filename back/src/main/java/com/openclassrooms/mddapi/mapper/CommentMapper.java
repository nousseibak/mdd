package com.openclassrooms.mddapi.mapper;

import com.openclassrooms.mddapi.dto.CommentDTO;
import com.openclassrooms.mddapi.model.Comment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public interface CommentMapper extends EntityMapper<CommentDTO, Comment> {

    //@Mapping(source = "author.id", target = "userId")
    @Mapping(source = "post.id", target = "postId")
    CommentDTO toDto(Comment comment);

   // @Mapping(source = "userId", target = "author.id")
    @Mapping(source = "postId", target = "post.id")
    Comment toEntity(CommentDTO commentDTO);
}
