package DSA.Functions;

public class Functions {
    
    // Factorial of the number
    public static int factorial(int n){
        int fact = 1;
        for(int i=1; i<=n; i++){
            fact *= i; 
        }
        return fact;
    }

    // Binomial Coefficient
    public static int binomialCoefficient(int n, int r){
        int bc = 0;
        bc = factorial(n)/(factorial(r)*factorial(n-r));
        return bc;
    }
    
    // Number is Prime or not
    // Math.sqrt(n) because factor repeat after half -> 12 : 2*6,3*4, 4*3,6*2 (this repeated)
    public static boolean checkPrime(int n){
        for(int i=2; i<=Math.sqrt(n); i++){
            if(n%i == 0){
                return false;
            }
        }
        return true;
    }

    // Prime in range
    public static void primeInRange(int s, int e){
        for(int i=s; i<=e; i++){
            if(checkPrime(i)){
                System.out.print(i+" ");
            }
        }
    }

    // Binary to Decimal Conversion
    public static int binaryDecimal(int n){
        int decimal = 0;
        int i = 0;
        while(n != 0){
            if(n%10 == 1){
                decimal += Math.pow(2, i);
            }
            n/=10;
            i++;
        }
        return decimal;
    }

    // Decimal to Binary Conversion
    public static String decimalBinary(int n){
        String binary = "";
        while(n != 0){
            int rem = n%2;
            binary += rem;
            n /= 2;
        }
        return binary;
    }

    public static void main(String[] args) {
        // System.out.println(factorial(5));
        // System.out.println(binomialCoefficient(5, 2));
        // System.out.println(checkPrime(9));
        // primeInRange(2, 20);
        // System.out.println(binaryDecimal(101));
        // System.out.println(decimalBinary(7));
        
    }
}
