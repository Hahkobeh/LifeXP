package uofc.goalapp.user;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document("users")
public class User {
    @Id
    private String id;
    private String username;
    private String password;

    //create new user change!
    public User(String username, String password){
        this.id = new ObjectId().toString();
        this.username = username;
        this.password = password;

    }

    public User(ObjectId id, String username, String password, float anagramRating, float wordleRating, float tbaRating) {
        this.id = id.toString();
        this.username = username;
        this.password = password;
    }
    public User(){

    }
}
