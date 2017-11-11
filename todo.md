## Reset the cron job for shutdown

```
#Computer shutdown/wake
30 20 * * * /usr/local/bin/shutwake
```

## shutwake script:

```
#!/bin/bash
sh -c "echo 0 > /sys/class/rtc/rtc0/wakealarm"
sh -c "echo `date '+%s' -d '+2 minutes'` > /sys/class/rtc/rtc0/wakealarm"
shutdown -h now

```

## Videos
Find and update all youtube videos in `data.json`

## Descriptions
- Research each mission
- Update short and long descriptions
- Look for support opportunities to link in the info page
