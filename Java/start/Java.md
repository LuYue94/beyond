多态
继承
封装
抽象
类
对象
实例
方法
重载

## 内置数据类型
byte    8
short   16
int     32
long    64
float   32
double  64
char    16

## 引用数据类型
对象，数组

## 自动类型转换
整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。

转换从低级到高级。

低  ------------------------------------>  高

byte,short,char—> int —> long—> float —> double 

## 修饰符
### 访问修饰符
default
private
public
protected
### 非访问修饰符
static          静态
final
abstract        抽象
synchronized    同一时间只能被一个线程访问
transient       预处理类和变量的数据类型
volatile        不同的线程总是看到某个成员变量的同一个值