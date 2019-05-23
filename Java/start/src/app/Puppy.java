package app;

public class Puppy {
    int puppyAge;
    public Puppy(String name){
        System.out.println(name);
    }

    public void setAge(int age){
        puppyAge = age;
    }

    public int getAge(){
        System.out.println(puppyAge);
        return puppyAge;
    }

    public static void main (String[] args){
        Puppy myPuppy = new Puppy("tom");
        myPuppy.setAge(222);
        System.out.println(myPuppy.puppyAge);
    }
}