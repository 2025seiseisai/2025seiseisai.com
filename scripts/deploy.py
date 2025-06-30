import subprocess
import sys


def run_command(cmd, error_msg, capture_output=False):
  if capture_output:
    result = subprocess.run(cmd, shell=True, text=True, capture_output=True)
    if result.returncode != 0:
      print(f"❌ {error_msg}\n{result.stderr}")
      sys.exit(1)
    return result.stdout
  else:
    result = subprocess.run(cmd, shell=True)
    if result.returncode != 0:
      print(f"❌ {error_msg}")
      sys.exit(1)
    return None

def main():
  if len(sys.argv) < 2:
    print("Usage: python deploy.py <branch-name>")
    sys.exit(1)

  branch = sys.argv[1]

  print(f"▶️ Switching to branch: {branch}")
  run_command("git fetch origin", "Failed to fetch origin")
  run_command(f"git checkout {branch}", f"Failed to checkout branch {branch}")
  run_command("git stash", "Failed to stash changes")
  run_command(f"git pull origin {branch}", f"Failed to pull latest changes from {branch}")

  print("📦 Installing dependencies...")
  run_command("npm install", "npm install failed")

  print("🔨 Building project...")
  run_command("npm run build", "Build failed")

  print("🚀 Starting project...")
  pm2_list = run_command("pm2 list", "Failed to list PM2 processes", capture_output=True)
  if "2025seiseisai" in pm2_list:
    print("🔁 Restarting existing process: 2025seiseisai")
    run_command("pm2 restart 2025seiseisai", "Failed to restart the project")
  else:
    print("🚀 Starting new process: 2025seiseisai")
    run_command('pm2 start npm --name "2025seiseisai" -- run start', "Failed to start the project")

  print(f"✅ Deployment to branch {branch} completed successfully!")

if __name__ == "__main__":
  main()
