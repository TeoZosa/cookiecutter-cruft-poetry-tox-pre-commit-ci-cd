window.BENCHMARK_DATA = {
  "lastUpdate": 1624582592133,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "fc5b87ab09464f3884aaa93e07a7700ba2bb6534",
          "message": ":arrow_up: Update template dependencies",
          "timestamp": "2021-06-25T00:51:15Z",
          "tree_id": "d4cf5205e4b366e1dfa3ccc481d977b51d57cb73"
        },
        "date": 1624582590476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14190.871204005556,
            "unit": "iter/sec",
            "range": "stddev: 0.00007848053741594858",
            "extra": "mean: 70.46783707808842 usec\nrounds: 12595"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3888892.8384315623,
            "unit": "iter/sec",
            "range": "stddev: 7.764158343914397e-7",
            "extra": "mean: 257.1425959898131 nsec\nrounds: 163935"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12002.993046913976,
            "unit": "iter/sec",
            "range": "stddev: 0.00003224599847884483",
            "extra": "mean: 83.31255346824554 usec\nrounds: 5910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117311.70701850078,
            "unit": "iter/sec",
            "range": "stddev: 0.000023714922197263832",
            "extra": "mean: 8.524298430354389 usec\nrounds: 46949"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14603.733013906249,
            "unit": "iter/sec",
            "range": "stddev: 0.00003802476367548768",
            "extra": "mean: 68.4756424297651 usec\nrounds: 8032"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3707332.352614168,
            "unit": "iter/sec",
            "range": "stddev: 7.921351040746798e-7",
            "extra": "mean: 269.73573040878046 nsec\nrounds: 151516"
          }
        ]
      }
    ]
  }
}