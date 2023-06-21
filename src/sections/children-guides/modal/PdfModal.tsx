import { Document, Page, Text, View, StyleSheet, PDFViewer, Image, Canvas } from '@react-pdf/renderer';

export const MyDocument = ({ file }: any) => {

  const styles = StyleSheet.create({
    page: { backgroundColor: '#fff' },
    section: { color: 'white', textAlign: 'center', margin: 30 }
  });
  console.log(file);
  
  return (
    <PDFViewer style={styles.page}>
      <Document>
        <Page size="A4">
          {/* <View style={styles.section}> */}
            <Text>sadfsdgsdgl;gjkl;</Text>
          {/* </View> */}
          {/* {file} */}
          <Text/>
        </Page>
      </Document>
    </PDFViewer>
  )
};