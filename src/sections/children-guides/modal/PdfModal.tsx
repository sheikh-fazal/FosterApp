import { Document, Page, Text, View, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';

export const MyDocument = ({ file }: any) => (
  <PDFViewer>
    <Document>
      <Page size="A4">
        {/* <View style={styles.section} render={({ }) => (file)} /> */}
        <Text render={({ pageNumber, totalPages }) => (
          // `${pageNumber} / ${totalPages}`
          file
        )} fixed />
      </Page>
    </Document>
  </PDFViewer>
);