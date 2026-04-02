package DSA.Patterns.AdvancePattern;

public class AdvancePatterns {
    public static void main(String[] args) {
        // * * * * *
        // *       *
        // *       *
        // * * * * *

        for(int i=1; i<=4; i++){
            for(int j=1; j<=4; j++){
                if(i==1 || i==4 || j==1 || j==4){
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                } 
            }
            System.out.println();
        }

        //         *
        //       * *
        //     * * *  
        //   * * * *        
        // * * * * *

        for(int i=1; i<=5; i++){
            for(int j=1; j<=5-i; j++){
                System.out.print("  ");
            }
            for(int k=1; k<=i; k++){
                System.out.print("* ");
            }
            System.out.println();            
        }

        // 1 2 3 4 5
        // 1 2 3 4
        // 1 2 3
        // 1 2 
        // 1

        for(int i=1; i<6; i++){
            for(int j=1; j<=6-i; j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }

        // 1
        // 2 3
        // 4 5 6
        // 7 8 9 10
        // 11 12 13 14 15

        int num = 1;
        for(int i=1; i<=5; i++){
            for(int j=1; j<=i; j++){
                System.out.print(num+" ");
                num++;
            }
            System.out.println();  
        }

        // 1
        // 0 1
        // 1 0 1
        // 0 1 0 1
        // 1 0 1 0 1

        for(int i=1; i<=5; i++){
            for(int j=1; j<=i; j++){
                if((i+j)%2 == 0){
                    System.out.print("1 ");
                } else{
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }

        // *               *
        // * *           * * 
        // * * *       * * *
        // * * * *   * * * *
        // * * * * * * * * *
        // * * * *   * * * *
        // * * *       * * *
        // * *           * *
        // *               *

        for(int i=1; i<=5; i++){
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            for(int j=1; j<= 2*(5-i); j++){
                System.out.print("  ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        for(int i=5; i>=1; i--){
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            for(int j=1; j<= 2*(5-i); j++){
                System.out.print("  ");
            }
            for(int j=1; j<=i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        //         * * * * *
        //       * * * * * 
        //     * * * * *
        //   * * * * * 
        // * * * * * 

        for(int i=1; i<=6; i++){
            for(int j=1; j<=6-i; j++){
                System.out.print("  ");
            }
            for(int j=1; j<=6; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

        //         * * * * *
        //       *       *
        //     *       * 
        //   *       *
        // * * * * *

        for(int i=1; i<=6; i++){
            for(int j=1; j<=6-i; j++){
                System.out.print("  ");
            }
            for(int j=1; j<=6; j++){
                if(j==1 || j==6 || i==1 || i==6){
                    System.out.print("* ");
                }else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }

        //      * 
        //    * * *
        //  * * * * *
        //* * * * * * *
        //  * * * * *
        //    * * * 
        //      * 

        int n=5;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i; j++){
                System.out.print("  ");
            }
            for(int j=1; j<=(2*i)-1; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        for(int i=n; i>=0; i--){
            for(int j=1; j<=n-i; j++){
                System.out.print("  ");
            }
            for(int j=1; j<=(2*i)-1; j++){
                System.out.print("* ");
            }
            System.out.println();
        }

            //      1 
            //     2 2 
            //    3 3 3 
            //   4 4 4 4 
            //  5 5 5 5 5 

        int counter = 1;
        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i; j++){
                System.out.print(" ");
            }
            for(int j=1; j<=i; j++){
                System.out.print(counter+" ");
            }
            counter++;
            System.out.println();
        }

        for(int i=1; i<=n; i++){
            for(int j=1; j<=n-i; j++){
                System.out.print(" ");
            }

            for(int j=i; j>=1; j--){
                System.out.print(j);
            }

            for(int j=2; j<=i; j++){
                System.out.print(j);
            }
            System.out.println();
        }

    }
}
