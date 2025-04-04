import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import prisma from '@/lib/prisma';
const parseExcelFile = (fileBuffer) => {
  // Read the workbook from the buffer
  const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet);
  return data;
};

export async function POST(req) {
  try {
    const body = await req.formData();
    const title = body.get('title');
    const subject = body.get('subject');
    const file = body.get('file');

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'Invalid file' }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const data = parseExcelFile(new Uint8Array(fileBuffer));

    const questions = data.map((row) => ({
      text: String(row.question),  // Ensure question text is a string
      options: [
        String(row.optionA),  // Convert options to strings
        String(row.optionB),
        String(row.optionC),
        String(row.optionD),
      ],
      correctanswer: String(row.correctanswer), // Convert correct answer to string
    }));

    const testSeries = await prisma.testseries.create({
      data: {
        title,
        subject,
        questions: {
          create: questions,
        },
      },
    });

    return NextResponse.json(testSeries, { status: 201 });
  } catch (error) {
    console.error('Error in uploading test series:', error);
    return NextResponse.json({ error: 'Database operation failed' }, { status: 500 });
  }
}
