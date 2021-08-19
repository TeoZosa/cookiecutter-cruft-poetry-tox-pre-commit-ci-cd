window.BENCHMARK_DATA = {
  "lastUpdate": 1629380875922,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "dbe615924ac80993e41648bf9070a2399f982a34",
          "message": "Merge pull request #289 from TeoZosa/dependabot/pip/tox-3.24.2",
          "timestamp": "2021-08-19T13:22:56Z",
          "tree_id": "31597c3ccee3136b9cc08f558a81175293023d69"
        },
        "date": 1629380873817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15222.084982667902,
            "unit": "iter/sec",
            "range": "stddev: 0.00008336648208189823",
            "extra": "mean: 65.6940229369771 usec\nrounds: 12469"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4030163.8214583965,
            "unit": "iter/sec",
            "range": "stddev: 2.89759734317676e-7",
            "extra": "mean: 248.12887125686947 nsec\nrounds: 188644"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13956.602473403342,
            "unit": "iter/sec",
            "range": "stddev: 0.00002145617591998956",
            "extra": "mean: 71.65067586510891 usec\nrounds: 8842"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131893.27654217152,
            "unit": "iter/sec",
            "range": "stddev: 5.29792270890572e-7",
            "extra": "mean: 7.581887615630356 usec\nrounds: 27931"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16197.871600182338,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030229305322526514",
            "extra": "mean: 61.736506170893655 usec\nrounds: 13369"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4114322.8051113915,
            "unit": "iter/sec",
            "range": "stddev: 1.6479053136414413e-8",
            "extra": "mean: 243.05336439742698 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}