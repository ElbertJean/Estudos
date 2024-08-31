import java.util.Scanner;

class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nota da 1º prova: ");
        double prova1 = sc.nextDouble();
        System.out.print("Nota da 2º Prova: ");
        double prova2 = sc.nextDouble();
    
        double mediaFinal = (prova1 + prova2) / 2;
    
        System.out.printf("A média final do aluno é: %.2f\n", mediaFinal);
        
        sc.close();
    }
}