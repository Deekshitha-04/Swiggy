import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class h1 {
    static final int MOD = 1000000007;
    static int[] fact;
    static int[] invFact;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim());
        
        int maxN = 1000000;
        computeFactorials(maxN);
        
        StringBuilder sb = new StringBuilder();
        for (int t = 0; t < T; t++) {
            int Ni = Integer.parseInt(br.readLine().trim());
            int N = Ni;
            
            int halfN = N / 2;
            long result = choose(Ni, halfN);
            
            sb.append(result).append("\n");
        }
        
        System.out.print(sb.toString());
    }
    
    static void computeFactorials(int maxN) {
        fact = new int[maxN + 1];
        invFact = new int[maxN + 1];
        
        fact[0] = 1;
        for (int i = 1; i <= maxN; i++) {
            fact[i] = (int)((long)fact[i - 1] * i % MOD);
        }
        
        invFact[maxN] = pow(fact[maxN], MOD - 2);
        for (int i = maxN - 1; i >= 0; i--) {
            invFact[i] = (int)((long)invFact[i + 1] * (i + 1) % MOD);
        }
    }
    
    static int choose(int n, int r) {
        if (r < 0 || r > n) return 0;
        return (int)((long)fact[n] * invFact[r] % MOD * invFact[n - r] % MOD);
    }
    
    static int pow(int a, int b) {
        int result = 1;
        while (b > 0) {
            if (b % 2 == 1) {
                result = (int)((long)result * a % MOD);
            }
            a = (int)((long)a * a % MOD);
            b /= 2;
        }
        return result;
    }
}
