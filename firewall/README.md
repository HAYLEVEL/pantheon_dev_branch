# Firewall Configuration Using iptables

This document explains how to configure a basic firewall using `iptables` on a Linux system. The configuration allows the following types of traffic:
- All local (loopback) traffic
- SSH traffic (port 22)
- HTTP traffic (port 80)
- HTTPS traffic (port 443)
- Related and established connections

All other incoming traffic will be blocked.

## Prerequisites

- Root or sudo privileges to modify iptables rules.
- Ensure that `iptables` is installed on your system.

## Firewall Rules

Below are the `iptables` rules that will be applied to the system.

1. **Allow loopback (local) traffic:**
   - This rule allows traffic on the loopback interface (localhost).

   ```bash
   sudo iptables -A INPUT -i lo -j ACCEPT
   ```
2. **Allow SSH traffic (port 22):**
   - This rule permits incoming SSH connections, allowing remote administration.
   ```bash
   sudo iptables -A INPUT -p tcp -m tcp --dport 22 -j ACCEPT
   ```
3. **Allow established and related connections:**
   - This rule allows traffic that is part of an established connection or related to an existing connection (e.g., data from a web page you are loading).
   ```bash
   sudo iptables -A INPUT -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
   ```
4. **Allow HTTP traffic (port 80):**
   - This rule allows web traffic on port 80 (for serving websites over HTTP).
   ```bash
   sudo iptables -A INPUT -p tcp -m tcp --dport 80 -j ACCEPT
   ```
5. **Allow HTTPS traffic (port 443):**
   - This rule allows secure web traffic on port 443 (for serving websites over HTTPS).
   ```bash
   sudo iptables -A INPUT -p tcp -m tcp --dport 443 -j ACCEPT
   ```
6. **Default DROP Rule**
   - By default, all incoming traffic that does not match the above rules will be dropped. This ensures the system remains secure and does not accept unnecessary traffic.
   ```bash
   sudo iptables -P INPUT DROP
   ```
## Save the iptables Configuration

To make these changes persistent across system reboots, you need to save the iptables rules.

On Ubuntu or Debian systems, use the following command:
```bash
sudo sh -c "iptables-save > /etc/iptables/rules.v4"
```

## Resetting the iptables Configuration

If at any time you want to reset the iptables configuration to allow all traffic (removing all rules), you can use the following commands:
```bash
sudo iptables -F
sudo iptables -P INPUT ACCEPT
sudo iptables -P FORWARD ACCEPT
sudo iptables -P OUTPUT ACCEPT
```
