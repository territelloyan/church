## Reset the cron job for shutdown

```
# Computer shutdown/wake
# load into crontab -e to automate boot
30 20 * * * /usr/local/bin/shutwake
```

## shutwake script:

```
# Called by the cronjob to set the wake time and do a safe
# system shutdown.
# /usr/local/bin/shutwake
# More about how this works: https://blog.ohheybrian.com/2016/09/turning-an-old-laptop-into-a-video-kiosk/
#!/bin/bash
sh -c "echo 0 > /sys/class/rtc/rtc0/wakealarm"
sh -c "echo `date '+%s' -d '+12 hours'` > /sys/class/rtc/rtc0/wakealarm"
shutdown -h now

```
