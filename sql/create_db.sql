USE demo;
CREATE TABLE yogastudio_schedule(
    ID INT NOT NULL auto_increment, 
    Day VARCHAR(20) NOT NULL, 
    TimeStart DATETIME, 
    TimeEnd DATETIME, 
    Classes VARCHAR(40),
    PRIMARY KEY (ID)
    );
