#include <stdio.h>


int prblmB(){
    int kilos;
    printf("give kilos: ");
    scanf("%d", &kilos);
    int tst = 1;

    for (int i = 0; i < kilos; i++)
    {
        if (kilos % 2 == 0)
        {
            tst = 0;
        }
        
    }

    if(tst == 1){
        return kilos;
    }
    
}

int main(){
    int kilos ;
     printf("give kilos: ");
    scanf("%d", &kilos);

    prblmB();
    return 0;
}