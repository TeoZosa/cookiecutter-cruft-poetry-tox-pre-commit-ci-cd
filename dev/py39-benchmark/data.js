window.BENCHMARK_DATA = {
  "lastUpdate": 1623107760591,
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
          "id": "03e87a386e616f41f29486a8914f47d8c36b48a8",
          "message": ":art: Clean up miscellaneous whitespace",
          "timestamp": "2021-06-07T23:10:33Z",
          "tree_id": "4d355df8a24889ef13f20f57076bbd8c76b3aca1"
        },
        "date": 1623107759518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15422.65667884581,
            "unit": "iter/sec",
            "range": "stddev: 0.00005751529113755593",
            "extra": "mean: 64.83967197244498 usec\nrounds: 12377"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4236548.354567622,
            "unit": "iter/sec",
            "range": "stddev: 4.209864120459264e-8",
            "extra": "mean: 236.04121003866817 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13945.159598264152,
            "unit": "iter/sec",
            "range": "stddev: 0.000006198750207546289",
            "extra": "mean: 71.70946972342122 usec\nrounds: 9116"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133081.46610058367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012895715297706184",
            "extra": "mean: 7.514194345020176 usec\nrounds: 37454"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15356.728403198911,
            "unit": "iter/sec",
            "range": "stddev: 0.00010157984713136908",
            "extra": "mean: 65.11803645571366 usec\nrounds: 13496"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4229858.88751273,
            "unit": "iter/sec",
            "range": "stddev: 6.297490667818383e-8",
            "extra": "mean: 236.41450615579052 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}