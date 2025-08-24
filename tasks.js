<!-- Task Page -->
<div id="ad-task">
  <h3>Watch Ad to Earn 10 Coins</h3>

  <button onclick="showAd()">Start Task</button>
  <div id="ad-box" style="margin-top:10px; display:none;">
      <script type="text/javascript">
          atOptions = {
              'key' : '6928b0f5b1a27066c76882257e555423',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
          };
      </script>
      <script type="text/javascript" src="//www.highperformanceformat.com/6928b0f5b1a27066c76882257e555423/invoke.js"></script>
  </div>
</div>

<script>
function showAd() {
    document.getElementById("ad-box").style.display = "block";

    // ধরো ad দেখানো শুরু হলো → 5 সেকেন্ড পর backend এ call যাবে
    setTimeout(() => {
        fetch("/api/task-complete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: "telegram_123", coins: 10 })
        });
        alert("✅ You earned 10 coins!");
    }, 5000);
}
</script>
