package uofc.lifexp.goal.goal;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.SimpleDateFormat;
import java.util.Date;

@Data
@Document("goals")
public class Goal {
    @Id
    private String id;
    private String username;
    private String body;
    private int status;// 0 incomplete, 1 complete, 2 is overdue
    private int rating;//1 - 5, 5 hardest
    private Date due = null;


    public Goal(GoalForm goalForm){
        this.id = new ObjectId().toString();
        this.username = goalForm.getUsername();
        this.body = goalForm.getBody();
        try {
            this.due = new SimpleDateFormat("yyyy-MM-dd").parse(goalForm.getDate());
        }catch (Exception e){
            e.printStackTrace();
        }
        this.rating = goalForm.getRating();

    }

    public Goal(){}





}
