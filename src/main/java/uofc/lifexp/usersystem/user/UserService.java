package uofc.lifexp.usersystem.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uofc.lifexp.goalsystem.goal.Goal;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Boolean createUser(String username, String password){
        User user = userRepository.findByUsername(username);
        if(user == null){
            System.out.println("user not found, creating a user");
            User newUser = new User(username, password);
            userRepository.save(newUser);
            return true;
        }
        System.out.println("user found");

        return false;

    }

    public User login(String username, String password){
        List<User> userList = userRepository.findByUsernameAndPassword(username,password);
        if(!userList.isEmpty()) {
            return userList.get(0);
        }
        return null;
    }

    public User changePassword(String id, String newPassword){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            user.get().setPassword(newPassword);
            userRepository.save(user.get());
            return user.get();
        }
        return null;
    }

    public User changeUsername(String id, String newUsername){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            user.get().setUsername(newUsername);
            userRepository.save(user.get());
            return user.get();
        }
        return null;
    }

    public boolean deleteAccount(String id){
        try {
            userRepository.deleteById(id);
        }catch (IllegalArgumentException e){
            return false;
        }
        return true;
    }

    public User getUser(String id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userRepository.findById(id).get();
        }else{
            return null;
        }
    }

    public boolean giveRewards(Goal goal){
        System.out.println(goal.getUsername());
        User user = userRepository.findByUsername(goal.getUsername());
        if(user == null){
            return false;
        }
        int rewardConstant = goal.getDifficulty() * 10;
        if(goal.getDue().before(new Date())){
            rewardConstant = (int) (rewardConstant * 0.6);
        }
        user.setExperience(user.getExperience() + (rewardConstant * 10));
        user.setGold(user.getGold() + rewardConstant);
        userRepository.save(user);
        System.out.println("hello");
        return true;
    }


    public boolean payCost(String username, int cost){
        User user = userRepository.findByUsername(username);
        if(user != null){
            if(user.getGold() < cost){
                return false;
            }else{
                user.setGold(user.getGold() - cost);
                userRepository.save(user);
                return true;

            }
        }
        return false;
    }

    public boolean checkLevel(String username, int level) {
        User user = userRepository.findByUsername(username);
        if(user != null){
            return user.getExperience() >= level;
        }
        return false;
    }
}
