window.BENCHMARK_DATA = {
  "lastUpdate": 1628460992871,
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
          "id": "aa8a1a48939b02444a850d4587d4bf4116014cf6",
          "message": ":construction_worker: Run package root command as part of `verify-user-install` job",
          "timestamp": "2021-08-08T22:10:42Z",
          "tree_id": "7ba14910dbbecfcb9542c10481a9d03528f31a16"
        },
        "date": 1628460990982,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14929.169590667823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000408552045627016",
            "extra": "mean: 66.98296204131117 usec\nrounds: 12092"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4297980.699756174,
            "unit": "iter/sec",
            "range": "stddev: 3.719079727055625e-7",
            "extra": "mean: 232.66740124160322 nsec\nrounds: 178572"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12187.942619130052,
            "unit": "iter/sec",
            "range": "stddev: 0.000055850119286692776",
            "extra": "mean: 82.04830226476548 usec\nrounds: 9141"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 124938.9029445771,
            "unit": "iter/sec",
            "range": "stddev: 0.000008183424870182228",
            "extra": "mean: 8.003912123700974 usec\nrounds: 36631"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14547.128019871228,
            "unit": "iter/sec",
            "range": "stddev: 0.00007913528417693728",
            "extra": "mean: 68.74209112850387 usec\nrounds: 6200"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4223570.289002192,
            "unit": "iter/sec",
            "range": "stddev: 2.1341261114738858e-7",
            "extra": "mean: 236.76651069450952 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}