import ffmpeg from "ffmpeg";

try {
  const process = new ffmpeg(
    "../vecteezy_abstract-neon-lights-glow-hole-tunnel-3d-illustration-vj-loop_1908965.mp4"
  );
  process.then(
    (video) => {
      video.addCommand("-y");
      video.addCommand("-vf", "scale=1920:-1");
      // video.addCommand("-r", "25"); // Limit frame rate if necessary
      video.addCommand("-movflags", "faststart");
      video.addCommand("-vcodec", "libx264");
      video.addCommand("-crf", "25"); // Video quality - 25 equals 75%
      video.addCommand("-g", "1");
      video.addCommand("-an");
      video.addCommand("-pix_fmt", "yuv420p");
      video.save(
        "./assets/vecteezy_abstract-neon-lights-glow-hole-tunnel-3d-illustration-vj-loop_1908965.mp4",
        (error, file) => {
          if (error) return console.log("Error: " + error);
          console.log("Video file: " + file);
        }
      );
    },
    (error) => console.log("Error: " + error)
  );
} catch (error) {
  console.log(error.code);
  console.log(error.msg);
}
