package uofc.lifexp.goalsystem.goal;

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
    private String title;
    private int status;// 0 incomplete, 1 complete, 2 is overdue
    private int difficulty;//1 - 5, 5 hardest
    private Date due = null;
    private String date;


    public Goal(GoalForm goalForm){
        this.id = new ObjectId().toString();
        this.username = goalForm.getUsername();
        this.title = goalForm.getTitle();
        this.date = goalForm.getDate();
        try {
            this.due = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss").parse(goalForm.getDate()+"T23:59:59");
        }catch (Exception e){
            e.printStackTrace();
        }
        this.difficulty = goalForm.getDifficulty();

    }

    public Goal(){}





}
