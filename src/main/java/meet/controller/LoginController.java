package meet.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.ModelAndView;

import meet.model.domain.dto.AdminAllList;
import meet.model.domain.entity.Member;
import meet.service.MemberService;

@SessionAttributes({"userinfo","roominfo"})
@RestController(value="LoginController")
public class LoginController{
	@Autowired
	AdminAllList adminAllList;
	@Autowired
	MemberService memberservice;
//	@Autowired
//	ServletContext servletContext;

	@PostMapping("/signin")
	public HashMap<String,Object> loginCheck(@RequestBody Member member, Model model) {				
		Member newmember = memberservice.checkMember(member.getId(), member.getPw());
		HashMap<String,Object> map = new HashMap<String,Object>();
		
		if(newmember!=null) {	//회원정보가 있다면	
			if(newmember.getId().equals("admin")) {	//관리자일때
				map.put("memberinfo", newmember);
				map.put("desturl", "admin");
			}else {	//일반회원일때
				adminAllList.getLoginMemberList().add(newmember);					
				model.addAttribute("userinfo",model);	//회원 개인 session에 id 등록		
			//	servletContext.setAttribute("loginmemberlist", adminAllList.getLoginmemberlist());	//로그인된 회원 정보들 리스트를 application scope에서 공유

				map.put("memberinfo", newmember);
				map.put("desturl", "waittingroom");
			}			
		}else {
			map.put("memberinfo", null);
			map.put("desturl", "signin");
		}

		return map;
	}
}
