window.BENCHMARK_DATA = {
  "lastUpdate": 1628368951048,
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
          "id": "ca5fdf0b4923b62cf344a806a9470f283f79bae8",
          "message": ":memo: Add emojis to all documentation sections",
          "timestamp": "2021-08-07T20:32:30Z",
          "tree_id": "9bf57dc084abab530ab2e159a2e83809fd6b6a23"
        },
        "date": 1628368949833,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15400.494646217012,
            "unit": "iter/sec",
            "range": "stddev: 0.000028471979519946618",
            "extra": "mean: 64.93297929528781 usec\nrounds: 13089"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4887198.599004593,
            "unit": "iter/sec",
            "range": "stddev: 5.159357368821435e-8",
            "extra": "mean: 204.6161987775382 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12899.297015896174,
            "unit": "iter/sec",
            "range": "stddev: 0.000014429420266434499",
            "extra": "mean: 77.52360448539726 usec\nrounds: 8518"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 162006.50639367494,
            "unit": "iter/sec",
            "range": "stddev: 0.000001523064974533139",
            "extra": "mean: 6.17259159684615 usec\nrounds: 41153"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15216.06474217183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000638407784228749",
            "extra": "mean: 65.72001479649772 usec\nrounds: 14327"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4704546.774420099,
            "unit": "iter/sec",
            "range": "stddev: 7.637885693573357e-8",
            "extra": "mean: 212.56032683903425 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}