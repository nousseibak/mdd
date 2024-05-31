package com.openclassrooms.mddapi.exception;

import com.openclassrooms.mddapi.payload.response.MessageResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * permet de renvoyer une erreur si les contarintes ne sont pas respectees (exemple: mot de passe trop court)
 */
@RestControllerAdvice
public class CustomValidationExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> handleValidationExceptions(MethodArgumentNotValidException ex) {
        // Récupérer le message d'erreur de la première violation de la contrainte
        String errorMessage = ex.getBindingResult().getFieldError().getDefaultMessage();
        return ResponseEntity.badRequest().body(new MessageResponse(errorMessage));
    }
}