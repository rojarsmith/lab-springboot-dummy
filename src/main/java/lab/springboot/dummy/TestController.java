package lab.springboot.dummy;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {
	
	@Value("${properties.name}")
	private String propertiesName;
	
	@GetMapping("hello")
	@ResponseBody
	public ResponseEntity<?> sayHello() {
		return ResponseEntity.ok().body(String.format("hello %s, %s", Const.Name, propertiesName));
	}
}
