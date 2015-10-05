package com.mycompany.myapp.config;

import com.mycompany.myapp.security.xauth.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
* Configures x-auth-token security.
*/
@Configuration
public class XAuthConfiguration {

    @Bean
    public TokenProvider tokenProvider(JHipsterProperties jHipsterProperties) {
        String secret = jHipsterProperties.getSecurity().getXauth().getSecret();
        int validityInSeconds = jHipsterProperties.getSecurity().getXauth().getTokenValidityInSeconds();
        return new TokenProvider(secret, validityInSeconds);
    }
}
