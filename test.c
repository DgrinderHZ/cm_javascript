#include <stdio.h>

int a = 2;
int b;
void test();

int main(int argc, char const *argv[]) {
  printf("%d \n", a);
  int a;
  a = 6;
  int b = 5;
  printf("%d \n", a);
  {
    int a;
    a = 0;
    printf("%d \n", a);
  }
  printf("%d \n", a);
  test();
  return 0;
}

void test() {
  int b;
  printf("%d \n", b);
}