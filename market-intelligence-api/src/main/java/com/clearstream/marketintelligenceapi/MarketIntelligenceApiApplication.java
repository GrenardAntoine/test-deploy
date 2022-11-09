package com.clearstream.marketintelligenceapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
public class MarketIntelligenceApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketIntelligenceApiApplication.class, args);
	}

}
