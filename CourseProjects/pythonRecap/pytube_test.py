from pytubefix import YouTube
from pytubefix.cli import on_progress

url = input("Enter the url of the youtube video: ")

yt = YouTube(url, use_oauth=True, allow_oauth_cache=True, on_progress_callback = on_progress)

title = str(yt.title)

choice = input(f"Do you want audio or video of {title} (a/v): ")

audio_path = "downloads\\audio"
video_path = "downloads\\video"


while choice != 'a' and choice != 'v':
    print("Please enter a valid choice")
    choice = input(f"Do you want audio or video of {title} (a/v): ")

if choice == 'a':
    stream = yt.streams.get_audio_only()
    stream.download(audio_path)
elif choice == 'v':
    stream = yt.streams.get_highest_resolution()
    stream.download(video_path)

