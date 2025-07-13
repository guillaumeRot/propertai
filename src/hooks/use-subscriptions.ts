// hooks/useSubscription.ts
import { useEffect, useState } from "react";

interface SubscriptionData {
  plan: "FREE" | "MONTHLY" | "YEARLY";
  status: "ACTIVE" | "CANCELED" | "TRIALING" | "INACTIVE";
  currentPeriodEnd?: string;
  analysesUsed: number;
  remaining?: number; // calculé si FREE
}

export const useSubscription = () => {
  const [data, setData] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const res = await fetch("/api/subscriptions");
        if (!res.ok) throw new Error("Not authorized");
        const json = await res.json();

        const enriched = {
          ...json,
          remaining:
            json.plan === "FREE"
              ? Math.max(0, 10 - json.analysesUsed)
              : undefined,
        };

        setData(enriched);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  return { subscription: data, loading };
};
