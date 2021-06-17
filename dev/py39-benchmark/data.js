window.BENCHMARK_DATA = {
  "lastUpdate": 1623935961405,
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
          "id": "5c3b7996d99e02f02437db6990234588654767ed",
          "message": "Merge pull request #216 from TeoZosa/dependabot/pip/pytest-xdist-2.3.0",
          "timestamp": "2021-06-17T13:14:15Z",
          "tree_id": "3f643fabc2d0ae1855d29154fddae3d2fdaf0ea1"
        },
        "date": 1623935959818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14901.60326386635,
            "unit": "iter/sec",
            "range": "stddev: 0.000009166516603950954",
            "extra": "mean: 67.10687315269064 usec\nrounds: 5211"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4318897.218288375,
            "unit": "iter/sec",
            "range": "stddev: 1.91326349098749e-7",
            "extra": "mean: 231.54058766785425 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13266.05313702421,
            "unit": "iter/sec",
            "range": "stddev: 0.000039690762748556354",
            "extra": "mean: 75.38037045917609 usec\nrounds: 5423"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128916.58838141794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010812890056115325",
            "extra": "mean: 7.756953643865899 usec\nrounds: 33221"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14949.298749738084,
            "unit": "iter/sec",
            "range": "stddev: 0.00003707538481104635",
            "extra": "mean: 66.89276980417026 usec\nrounds: 10604"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4242631.596417763,
            "unit": "iter/sec",
            "range": "stddev: 7.367419202127564e-8",
            "extra": "mean: 235.70276543581136 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}