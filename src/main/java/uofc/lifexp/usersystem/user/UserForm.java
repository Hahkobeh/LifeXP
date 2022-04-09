package uofc.lifexp.usersystem.user;

import lombok.Data;
import org.bson.types.ObjectId;

@Data
public class UserForm {
    private String id;
    private String username;
    private String password;


}
