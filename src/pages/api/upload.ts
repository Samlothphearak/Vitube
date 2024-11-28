// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';
import Video from '@/models/Video';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const uploadMiddleware = upload.single('video');
    uploadMiddleware(req, res, async (err: any) => {
      if (err) {
        return res.status(400).json({ error: 'File upload failed.' });
      }

      try {
        await connectToDatabase();

        const { title, description } = req.body;
        const videoUrl = `/uploads/${req.file?.filename}`;

        const newVideo = new Video({
          title,
          description,
          videoUrl,
        });

        await newVideo.save();

        res.status(200).json({ message: 'Video uploaded successfully!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save video to the database.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
