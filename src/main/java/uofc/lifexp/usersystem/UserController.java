package uofc.lifexp.usersystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uofc.lifexp.usersystem.friend.FriendService;
import uofc.lifexp.usersystem.user.User;
import uofc.lifexp.usersystem.user.UserForm;
import uofc.lifexp.usersystem.user.UserService;

import java.util.List;

@Controller
@RequestMapping(path = "api/user")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController {
    private final UserService userService;
    private final FriendService friendService;
    @Autowired
    public UserController(UserService userService, FriendService friendService){
        this.friendService = friendService;
        this.userService = userService;
    }

    @PostMapping("/login")
    @ResponseBody
    public User login(@RequestBody UserForm userForm){
        System.out.println("Login request received");
        return userService.login(userForm.getUsername(), userForm.getPassword());
    }

    @PostMapping("/register")
    @ResponseBody
    public boolean register(@RequestBody UserForm userForm){
        System.out.println("Register request received");
        return userService.createUser(userForm.getUsername(),userForm.getPassword());
    }

    @GetMapping("/get-friends/{username}")
    @ResponseBody
    public List<String> getFriends(@PathVariable String username){
        System.out.println("Get friends request received");
        return friendService.getFriends(username);
    }



}
