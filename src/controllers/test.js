export const test = async (req, res) => {
    try {
       res.json('Holii estoy habilitado')
    } catch (error) {
      res.status(500).json("Something went wrong");
    }
  };