package uofc.lifexp.usersystem.user;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("users")
public class User {
    @Id
    private String id;
    private int type; //0 regular, 1 moderator
    private String username;
    private String password;
    private int experience;
    private int gold;


    //create new user change!
    public User(String username, String password){
        this.id = new ObjectId().toString();
        this.username = username;
        this.password = password;
    }
    public User(){

    }
}
